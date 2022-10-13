const express = require("express");
const multer = require("multer");
const reader = require("xlsx");
const router = express.Router();
const path = require("path");
const NFT = require("../models/NFT.model");
const auth = require("../middleware/auth");
const lodash = require('lodash');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//! GET ALL NFT
router.get("/nft", auth, async (req, res, next) => {
  try {
    const allNFT = await NFT.find({});
    res.send(allNFT);
  } catch (error) {
    res.status = 400;
    res.send(error);
  }
});

//! DELETE ALL NFT
router.post("/nft/delete/all", auth, async (req, res, next) => {
  try {
    const response = await NFT.deleteMany({});
    res.send(response);
  } catch (error) {
    res.status = 400;
    res.send(error);
  }
});

//! UPLOAD NFT
router.post(
  "/nft/import",
  multer({ storage: storage }).single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
      }

      //! ===============> HANDLE XLSX <========================
      //* Path of file just uploaded
      const pathFileUploaded = path.resolve(
        __dirname,
        "../uploads/" + file.originalname
      );

      //* Read file
      const allNFT = await NFT.find({});
      const fileReader = reader.readFile(pathFileUploaded);

      //* Read each sheet
      const sheets = fileReader.SheetNames;
      const tempObj = {};

      //* Define field ID
      const idField = "NFT ID";
      let dataFromExcel = [];

      //* Loop each sheet and get data of it
      for (let i = 0; i < sheets.length; i++) {
        tempObj[sheets[i]] = [];
        const temp = reader.utils.sheet_to_json(fileReader.Sheets[sheets[i]]);

        temp.forEach((res) => {
          //* Custom each NFT
          const eachNFTData = {
            ...res,
            [idField]:
              typeof res[idField] === "string"
                ? res[idField].replace("/", "")
                : `${res[idField]}`,
            Tier: res.Tier || 1,
          };

          // tempObj[sheets[i]].push(eachNFTData);
          dataFromExcel.push(eachNFTData);
        });

        //* Filter invalid NFT ID
        // tempObj[sheets[i]] = tempObj[sheets[i]].filter((el) => !!el[idField]);
        dataFromExcel = dataFromExcel.filter((el) => !!el[idField]);
      }

      //* Get all NFT ID that existed!
      const allNFTIds = allNFT.map((el) => `${el[idField]}`);
      const listReq = lodash.uniqBy(dataFromExcel, idField).map((nft) => {

        //* If existed -> Update NFT
        if (allNFTIds.includes(`${nft[idField]}`)) {
          return NFT.findOneAndReplace({ [idField]: nft[idField] }, nft);
        }

        //* If no -> create new NFT
        return new NFT(nft).save();
      });

      await Promise.all(listReq);
      res.send("OK");
    } catch (error) {
      error.httpStatusCode = 400;
      return next(error);
    }
  }
);

module.exports = router;

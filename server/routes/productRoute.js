import express from "express";
import { upload } from "../configs/multer";
import authSeller from "../middleware/authSeller";
import { addProduct } from "../controllers/productController";

const productRouter = express.Router();
productRouter.post("/add", upload.array([images]), authSeller, addProduct);
productRouter.get("/list", getProducts);
productRouter.get("/id", getProductById);
productRouter.post("/stock", authSeller, updateStock);

export default productRouter;

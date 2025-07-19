import { Router } from "express";
import { login, register , addToHistory , getUserHistory} from "../controllers/user.controller.js";

const router = Router();

// router.route("/login").post(login);
// router.route("/register").post(register);
// Alternative
    router.post("/login", login);
    router.post("/register", register);

router.post("/add_to_activity", addToHistory);
router.get("/get_all_activity", getUserHistory); 

export default router;
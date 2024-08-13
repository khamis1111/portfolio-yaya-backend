const userInfoModel = require("../models/userInfoModel");
const handlersFactory = require("./factory/handlersFactory");

module.exports = {
    // @desc   Add Diary
    // @Route  POST /api/v1/diary
    // @Access Private
    addDiary: handlersFactory.addInModel(userInfoModel, 'diary'),
    // @desc   Update Diary
    // @Route  PUT /api/v1/diary/:id
    // @Access Private
    updateDiary: handlersFactory.updateInModel(userInfoModel, 'diary', 'name link'),
    // @desc   Delete Diary
    // @Route  DELETE /api/v1/diary/:id
    // @Access Private
    deleteDiary: handlersFactory.deleteInModel(userInfoModel, 'diary'),
}
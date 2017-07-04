var httpUtility = require('../utilities/httpUtility')

export default {
    getVersionInfo: function (callBack) {
        httpUtility.get('').done(function (data) {
            callBack && callBack(data);
        }).catch(function () {
            callBack && callBack(new httpUtility.ErrorModel());
        });
    }
}
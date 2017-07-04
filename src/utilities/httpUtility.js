export default {
    get: function (url, config) {
        if (typeof (url) === 'object') {
            config = url;
        }
        config.url = url || config.url;
        config.method = 'GET';
        var promise = $.ajax(config);
        return promise;
    },
    post: function (url, data, config) {
        if (typeof (url) === 'object') {
            config = url;
        }
        config.url = url || config.url;
        config.method = 'POST';
        config.data = data;
        var promise = $.ajax(config);
        return promise;
    },
    ErrorModel() {
    this.state = false,
        this.message = "系统出现异常"
}
}
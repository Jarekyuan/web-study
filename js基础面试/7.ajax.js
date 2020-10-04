function ajax(url) {
    const p = new Promise((resolve, reject) => {

        // get请求
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.send(null)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // 成功.then
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
                // 失败.catch
                else if (xhr.status === 404 || xhr.status === 500) {
                    reject(new Error('404 not found'))
                }
            }
        }
    })
    return p
}

const url = '/data/test.json'
ajax(url)
    .then(res => console.log(res))
    .catch(err => console.error(err))
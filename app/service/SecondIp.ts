import Base from './Base'

export default class SecondService extends Base {

    public async save_token(token: string) {
        // console.log(this.tool())
        const db = this.tool()
        try {
            var result = await db.insert('update_ip_token', {
                token,
                part: this.app.config.part,
                time: parseInt((Date.now() / 1000).toString())
            })
        } catch (err) {
            return Promise.reject(err)
        }
        return result.affectedRows > 0 ? Promise.resolve(result) : Promise.reject('更新辅助服务器IP的token插入数据表失败')
    }

    public async request_update_upload_ip(token: string) {
        try {
            const result = await this.ctx.curl('http://api.tool.presstime.cn/service_part/update_upload_ip', {
                method: 'GET',
                data: {
                    token,
                    part: this.app.config.part
                },
                dataType: 'json'
            })
            // console.log(this.app.config.part)
            // console.log(result)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async delete_old_token() {
        const db = this.tool()
        try {
            // let result = db.select('update_ip_token', {
            //     columns: ['count(id) as count']
            // })
            let result = await db.query('SELECT COUNT(`id`) AS `count` FROM update_ip_token')
            if (result[0].count > 2000) {
                await db.query(`DELETE FROM update_ip_token limit 720`)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = SecondService;
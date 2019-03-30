import { Subscription } from 'egg'
const crypto = require('crypto')
const chance = require('chance');
const Chance = new chance()
class UpdateSecondIp extends Subscription {

    static get schedule() {
        return {
            interval: '30s',
            type: 'worker',
            immediate: true
        };
    }

    async subscribe() {
        try {
            const str = Chance.string({ length: 10 })
            const json = JSON.stringify({
                str,
                time: Date.now()
            })
            var token = crypto.createHash('md5').update(json).digest('hex')
            await this.ctx.service.secondIp.save_token(token)
            await this.ctx.service.secondIp.request_update_upload_ip(token)
            this.ctx.service.secondIp.delete_old_token()
        } catch (err) {
            console.error(err)
        }


    }
}

module.exports = UpdateSecondIp
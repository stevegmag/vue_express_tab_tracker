import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('Register', credentials)
    }
}

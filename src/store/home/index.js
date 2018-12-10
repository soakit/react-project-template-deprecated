import api from '@/utils/api-client'

const home = {
	// 获取记录
	GET_ALL_RECORDS: Symbol('GET_ALL_RECORDS'),
}

export const actions = {
	// 保存表单数据
    getAllRecords: () => {
        return async dispatch => {
            const result = await api('get', '/getAllRecords')
            dispatch({
                type: home.GET_ALL_RECORDS,
                dataList: result
            })
        }
    },
}

const defaultState = {
}
export const reducer = {
	// 首页表单数据
	formData: (state = defaultState, action = {}) => {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case home.GET_ALL_RECORDS:
				return { ...state, ...{ [action.datatype]: action.value } }
		}
	}
}

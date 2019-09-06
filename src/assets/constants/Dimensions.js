import {Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window')

const WIDTH = width

const HEIGHT = height

const MENU_WIDTH = WIDTH - 60

const HALF_WIDTH = WIDTH / 2
const ONE_SIXTH_HEIGHT = HEIGHT / 6
const TWO_THIRD_HEIGHT = HEIGHT * 2 / 3

const ONE_THIRD_WIDTH = WIDTH / 3
const TWO_THIRD_WIDTH = WIDTH * 2 / 3

const CM_HORIZONTAL_FLATLIST = WIDTH - 40
const CM_HORIZONTAL_BILLING = WIDTH - 80

const CM_HEIGHT_ATTACHMENT=HEIGHT*1/3
export const WIDTH_CONFIRMATION_INPUT = (width - (40 * 2) - (30 * 3)) / 4

export default {
	WIDTH,
	HEIGHT,
	MENU_WIDTH,
	HALF_WIDTH,
	ONE_SIXTH_HEIGHT,
	TWO_THIRD_HEIGHT,
	CM_HORIZONTAL_BILLING,
	ONE_THIRD_WIDTH,
	TWO_THIRD_WIDTH,
	CM_HORIZONTAL_FLATLIST,
	CM_HEIGHT_ATTACHMENT
}


export const IS_IPHONE_X = () => {
	let d = Dimensions.get('window')
	const {height, width} = d
	return (
		// This has to be iOS duh
		Platform.OS === 'ios' &&

		// Accounting for the height in either orientation
		(height === 812 || width === 812)
	)
}

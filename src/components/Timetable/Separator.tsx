import type React from 'react'
import { View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export default function Separator(): React.JSX.Element {
	const { styles } = useStyles(stylesheet)

	return <View style={styles.separator} />
}

const stylesheet = createStyleSheet((theme) => ({
	separator: {
		backgroundColor: theme.colors.border,
		height: 1,
		marginLeft: 60, // Aligned with where the text begins in FormList
		marginVertical: 13
	}
}))

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDialog } from '../redux/app'


export default function Dialog(props) {

	const isOpen = Object.keys(props).length > 0

	if (!isOpen) {
		return null
	}

	const {
		title = 'Dialog',
		content = null,
		prompt = null,
		label = '',
		button1,
		button2,
		callback,
	} = props

	const dispatch = useDispatch()
	const [input, setInput] = useState('')

	const complete = (ok) => {
		if (callback) {
			callback({ ok, input })
		}
		onClose()
	}

	const onClose = () => dispatch(setDialog(null))

	// normally style a component like below
	const result = window.confirm(`${title}\n\n${content}`)
	complete(result)

	return null
	// Reference Component
	// <>
	// 	<AlertDialog
	// 		isOpen={isOpen}
	// 		onClose={onClose}
	// 	>
	// 		<AlertDialogOverlay />
	// 		<AlertDialogContent>
	// 			<AlertDialogHeader fontSize="lg" fontWeight="bold">
	// 				{title}
	// 			</AlertDialogHeader>

	// 			<AlertDialogBody>
	// 				{content && <p>{content}</p>}
	// 				{
	// 					prompt &&
	// 					<Input
	// 						autoFocus
	// 						className={marginTop}
	// 						placeholder={label} type="text"
	// 						value={input}
	// 						onChange={(e) => setInput(e.target.value)}
	// 						onKeyDown={({ key }) => {
	// 							if (key === 'Enter') {
	// 								complete(1)
	// 							}
	// 						}}
	// 					/>
	// 				}
	// 			</AlertDialogBody>

	// 			<AlertDialogFooter>
	// 				<ButtonGroup spacing={4}>
	// 					<Button onClick={() => complete(1)}>
	// 						{button1 || 'OK'}
	// 					</Button>
	// 					<Button variantColor="red" onClick={() => complete(0)}>
	// 						{button2 || 'Cancel'}
	// 					</Button>
	// 				</ButtonGroup>
	// 			</AlertDialogFooter>
	// 		</AlertDialogContent>
	// 	</AlertDialog>
	// </>
}


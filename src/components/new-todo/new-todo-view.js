import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const Input = styled.input`
	background: transparent;
	color: white;
	font-size: 16px;
	line-height: 20px;
	border: none;
	border-bottom: 1px solid white;
	outline: none;
	padding-bottom: 8px;
	margin-left: 16px;
`

export default ({ todo, onChange, submit }) => (
	<Form onSubmit={ev => submit(ev)}>
		<Input 
			value={todo} 
			onChange={onChange}
			placeholder="Type your todo and hit enter!"
		/>
	</Form>
)

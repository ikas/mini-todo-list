import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
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
	margin: 0 16px;
`

export default ({ todo, refFunction, onChange, submit }) => (
	<Form onSubmit={ev => submit(ev)}>
		<Input 
			ref={input => refFunction(input)}
			value={todo} 
			onChange={onChange}
			placeholder="Type your todo and hit enter!"
		/>
	</Form>
)

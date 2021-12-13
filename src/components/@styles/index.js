import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	html, body {
		min-height: 100%;
	}

	html, body, ul, ol, dd, p, pre, h1, h2, h3 {
		margin: 0px;
		padding: 0px;
	}

	body {
		background-color: ${({ theme: { colors } }) => colors.primary};
	}

	* {
		box-sizing: border-box;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		font-family: 'Source Sans Pro', sans-serif;
	}

	ul, ol, li {
		list-style: none;
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}
`

export const Container = styled.div`
	width: 100%;
	height: auto;
	position: relative;
`

export const SearchInputContainer = styled.div`
	width: 100%;
	max-width: 450px;
	margin: 50px auto 0px;
	position: relative;
`

export const SearchInput = styled.div`
	background: #ffffff;
	width: 100%;
	padding: 8px 18px;
	border: 1px solid #cccccc;
	border-radius: 100px;
	box-shadow: inset 0px 1px 4px rgb(0 0 0 / 14%);
	position: relative;
`

export const SearchIcon = styled.i`
	display: inline-block;
	width: 19px;
	height: 19px;
	background-image: url(/magnifier.png);
	background-position: center;
	background-attachment: scroll;
	background-size: 20px 20px;
	background-repeat: no-repeat;
	top: 0px;
	bottom: 0px;
	margin: auto;
	position: absolute;
`

export const InputWrapper = styled.div`
	width: 100;
	padding: .0px .0px .0px 30px;

	input {
		width: 100%;
		border: 0px;
		outline: 0px;
		font: lighter 28px Arial, Helvetica, sans-serif;
		color: #d0d0d0;
	}
`

import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import style from './style';

const Name = styled.h2`
	margin: 0;
	text-transform: uppercase;
	font-size: 1.1em;
	float: left;
	line-height: 56px;
	padding: 0 15px;
`

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Name>Aaron Dack</Name>
				<nav className="nav-effect">
					<Link activeClassName={style.active} href="/">Portfolio</Link>
					<Link activeClassName={style.active} href="/profile">Writings</Link>
					<Link activeClassName={style.active} href="/profile/john">About &amp; Contact</Link>
				</nav>
			</header>
		);
	}
}

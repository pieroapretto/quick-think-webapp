import styled, { css } from "styled-components";
import Header from "../components/Header";
import { LinkComponent } from "../components/Link";

export const display_flex = css`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const HomePage = () => {
    return (
        <Container>
            <Header />
            <section>
                <ul>
                    <li><LinkComponent to={'/learn-how-to-play'} label={'Learn how to play'}/></li>
                    <li><LinkComponent to={'/game'} label={'Play now'}/></li>
                </ul>
            </section>
        </Container>
    )
}

const Container = styled.div`
    max-width: 800px;
    margin: auto;
    text-align: center;
    ${display_flex};

    section {
        ul {
            list-style: none;
            padding: 0;
            ${display_flex}
            a {
                font-size: 2rem;
                text-decoration: none;
                color: #000;
            
                @media(min-width: 400px) {
                    font-size: 3rem;
                }
            }
        }
    }
`

export default HomePage 
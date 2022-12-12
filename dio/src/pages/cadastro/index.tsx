import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Buttons';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ICadastro } from "./types";
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, LoginText, Row, Wrapper } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const handleClickLogin = () => {
        navigate('/Login')
    }

    const { control, formState: { errors  } } = useForm<ICadastro>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nomeCompleto"  control={control} />
                    {errors.nomeCompleto && <span>Campo obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>Campo obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Campo obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <br />
                <h4>
                    Ao clicar em "criar minha conta grátis",
                    declaro que aceito as Políticas de Privacidade e os 
                    Termos de Uso da DIO
                </h4>
                <Row>
                    <h6>Já tenho conta.</h6><LoginText onClick={handleClickLogin}>Fazer Login</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }
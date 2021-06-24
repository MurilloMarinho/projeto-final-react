import { useState } from 'react'
import http from "../../http/index";
const SignIn = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')    
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')   
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('') 

    const efetuarCadastro = (evento) => {
        evento.preventDefault()
        const usuario ={
        nome: nome,
        userNameCliente: userNameCliente,
        telefone: telefone,
        email: email,
        senha: senha,

        cpf: cpf,
        endereco:{
            cep: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            uf: uf
        }
        }
        
        http.post('auth/register', usuario)
        .then(response => console.log(response.data))
        .catch(erro => console.log(erro))
        console.log('Formulario foi submetido');
    }

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }
    const manipuladorCpf = (evento) => {
        setCpf(evento.target.value)
    }
    const manipuladorCep = (evento) => {
        setCep(evento.target.value)
    }
    const manipuladorRua = (evento) => {
        setRua(evento.target.value)
    }
    const manipuladorNumero = (evento) => {
        setNumero(evento.target.value)
    }
    const manipuladorBairro = (evento) => {
        setBairro(evento.target.value)
    }
    const manipuladorCidade = (evento) => {
        setCidade(evento.target.value)
    }
    const manipuladorUf = (evento) => {
        setUf(evento.target.value)
    }
    const manipuladorUserNameCliente = (evento) => {
        setUserNameCliente(evento.target.value)
    }
    const manipuladorTelefone = (evento) => {
        setTelefone(evento.target.value)
    }

    return (
    <div>
        <h1>Registro de usuario</h1>
        <form onSubmit={efetuarCadastro} className='form-registro'>
            <div>
                <label>Nome</label>
                <input value={nome} onChange={manipuladorNome} type="text" required/>
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={manipuladorEmail} type="email" required/>
            </div>
            <div>
                <label>Senha</label>
                <input value={senha} onChange={manipuladorSenha} type="password" required/>
            </div>
            <div>
                <label>Confirmar Senha</label>
                <input value={senha} onChange={manipuladorSenha} type="password" required/>
            </div>
            <div>
                <label>CPF</label>
                <input value={cpf} onChange={manipuladorCpf} type="number" required/>
            </div>
            <div>
                <label>Username</label>
                <input value={userNameCliente} onChange={manipuladorUserNameCliente} type="text" required/>
            </div>
            <div>
                <label>Telefone</label>
                <input value={telefone} onChange={manipuladorTelefone} type="number" required/>
            </div>
            <div>
                <label>CEP</label>
                <input value={cep} onChange={manipuladorCep} type="number" required /*pattern="\d{5}-\d{3}"*//>
            </div>
            <div>
                <label>Rua</label>
                <input value={rua} onChange={manipuladorRua} type="text" required/>
            </div>
            <div>
                <label>Numero</label>
                <input value={numero} onChange={manipuladorNumero} type="number" required/>
            </div>
            <div>
                <label>Bairro</label>
                <input value={bairro} onChange={manipuladorBairro} type="text" required />
            </div>
            <div>
                <label>Cidade</label>
                <input value={cidade} onChange={manipuladorCidade} type="text" required/>
            </div>
            <div>
                <label>UF</label>
                <input value={uf} onChange={manipuladorUf} type="text" required/>
            </div>
            <button>Registrar</button>
        </form>
    </div>
    )
}

export default SignIn
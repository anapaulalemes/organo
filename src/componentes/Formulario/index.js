import { useState } from 'react'
import CampoTexto from '../Banner/CampoTexto'
import Botao from '../Botao'
import Seletor from '../Seletor'
import './Formulario.css'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Gestão e Inovação'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido => ', nome, cargo, imagem, time)
    }

    return (
        <section className="formulario"> 
            <form onSubmit={aoSalvar}>
              <h2>Preencha os dados para criar o card do colaborador</h2>  
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"valor={cargo} aoAlterado={valor => setCargo(valor)}/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
            <Seletor obrigatorio={true} label="Time" itens= {times} valor={time} aoAlterado={valor => setTime(valor)}/>
            <Botao>
                Criar Card
            </Botao>           
            </form>
        </section>
    )
}

export default Formulario
import './Seletor.css'

const Seletor = (props) => {
    return (
        <div className='seletor'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => { return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}
export default Seletor
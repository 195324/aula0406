import { Link } from "react-router-dom" //npm run dev

export default function Home() {
    return (
        <>
            <div>
                <h1>Lista de tarefas</h1>
                <hr/>
                <h2>Projeto html</h2>
                <hr />
            </div>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </>
    )
}
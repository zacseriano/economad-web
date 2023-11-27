import { useState } from "react";

export const CriarDespesa = () => {
    
    const [descricao, setDescricao] = useState('');
    const [prazo, setPrazo] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');
    const [parcela, setParcela] = useState('');
    const [origem, setOrigem] = useState('');
    const [pagador, setPagador] = useState('');
    const [pago, setPago] = useState('');

    const handleCriar = () => {
        console.log(descricao)
    }
    
    return(
        <div>
            <form>
                <label>
                    <span>Descrição</span>
                    <input value={descricao} onChange={e => setDescricao(e.target.value)} />
                </label>

                <label>
                    <span>Data</span>
                    <input value={data} onChange={e => setData(e.target.value)} />
                </label>

                <label>
                    <span>Prazo</span>
                    <input value={prazo} onChange={e => setPrazo(e.target.value)} />
                </label>

                <label>
                    <span>Valor</span>
                    <input value={valor} onChange={e => setValor(e.target.value)} />
                </label>

                <label>
                    <span>Número de Parcelas</span>
                    <input value={parcela} onChange={e => setParcela(e.target.value)} />
                </label>

                <label>
                    <span>Origem</span>
                    <input value={origem} onChange={e => setOrigem(e.target.value)} />
                </label>

                <label>
                    <span>Pagador</span>
                    <input value={pagador} onChange={e => setPagador(e.target.value)} />
                </label>

                <label>
                    <span>Pago</span>
                    <input value={pago} onChange={e => setPago(e.target.value)} />
                </label>

                <button type="button" onClick={handleCriar}>
                    Criar
                </button>
            </form>
        </div>
    );
}
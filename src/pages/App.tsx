import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSeleiconada: ITarefa) {
    setSelecionado(tarefaSeleiconada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSeleiconada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa, 
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;

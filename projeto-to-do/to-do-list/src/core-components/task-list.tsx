import Button from "../components/button";
import PlusIcon from "../assets/plus.svg?react";
import TextItem from "./text-item";
import useTasks from "../hooks/use-task";

export default function TaskList(){
  const {tasks} = useTasks();

  console.log(tasks)
  return (
    <>
      <section>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
        </section>
      <section className="space-y-2">
        <TextItem />
        <TextItem />
        <TextItem />
        <TextItem />
      </section>
    </>
  )
}
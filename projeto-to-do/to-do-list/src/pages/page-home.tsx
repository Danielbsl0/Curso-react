import Container from "../components/container";
import TextSummary from "../core-components/text-summary";
import TaskList from "../core-components/task-list.tsx";

export default function PageHome(){
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TextSummary />
      </header>
      <TaskList/>
    </Container>  
  )
}
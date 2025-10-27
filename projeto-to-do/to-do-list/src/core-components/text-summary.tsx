import Text from "../components/text";
import Badge from "../components/badge";

export default function TextSummary(){
  return <>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">
        Tarefas Criadas
      </Text>
      <Badge variant="secondary">
        5
      </Badge>
    </div>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">
        Tarefas Concluídas
      </Text>
      <Badge variant="primary">
        2 de 5
      </Badge>
    </div>
  </>
}
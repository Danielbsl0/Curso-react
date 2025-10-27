import Card from "../components/cards";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";
import TrashIcon from "../assets/trash.svg?react";
import CheckIcon from "../assets/check.svg?react";
import PencilIcon from "../assets/pencil-simple.svg?react";
import XIcon from "../assets/x.svg?react";
import React from "react";
import InputText from "../components/input";


export default function TextItem(){
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditTask(){
    setIsEditing(true);
  }

  function handleExitEditTask(){
    setIsEditing(false);
  }
  return (
    <Card size={"md"} className="flex items-center gap-3">
      {!isEditing ? 
        <>
          <InputCheckbox/>
          <Text className="flex-1">
            Fazer Compras da semana
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
            <ButtonIcon icon={PencilIcon} variant={"tertiary"} onClick={handleEditTask}/>
          </div>
        </>
        :
        <>
          <InputText />
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant={"secondary"} onClick={handleExitEditTask}/>
            <ButtonIcon icon={CheckIcon}/>
          </div>
        </>
    }
 
    </Card>
  )
}
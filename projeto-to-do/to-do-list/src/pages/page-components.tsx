import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/cards";
import Container from "../components/container";
import Icon from "../components/icon";
import InputText from "../components/input";
import InputCheckbox from "../components/input-checkbox";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/trash.svg?react";
import CheckIcon from "../assets/check.svg?react";
import PencilIcon from "../assets/pencil-simple.svg?react";
import PlusIcon from "../assets/plus.svg?react";
import SpinnerIcon from "../assets/spinner.svg?react";
import XIcon from "../assets/x.svg?react";

export default function PageComponents(){
    return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text
          variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text
          className="text-green-base">
            Olá mundo!
          </Text>
          <Text
          variant="body-md-bold">
            Olá mundo!
          </Text>
          <Text
          >
            🐕  Levar o dog pra passear
          </Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon}className="fill-pink-base"/>
          <Icon svg={CheckIcon}></Icon>
          <Icon svg={PlusIcon}></Icon>
          <Icon svg={SpinnerIcon} animate></Icon>
          <Icon svg={PencilIcon}></Icon>
          <Icon svg={XIcon}></Icon>
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>
          <ButtonIcon icon={TrashIcon} loading/>
        </div>
        <div className="flex gap-1">
          <InputText/>
        </div>
        <div>
          <InputCheckbox/>
          <InputCheckbox loading/>
        </div>
        <div>
          <Card>Olá Mundo</Card>
        </div>
        <div className="space-y-2 ">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="h-6 w-96"/>
        </div>
      </div>
    </Container>
);
}
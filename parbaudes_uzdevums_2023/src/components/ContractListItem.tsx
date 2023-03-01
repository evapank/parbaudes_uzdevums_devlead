import React from "react";
import {Contract} from "../models/Contract";
import {Text, View, Pressable} from "react-native";

interface Props{
    contract: Contract;
    onDelete?: (contract: Contract) => void;
    onEdit?: (contract: Contract) => void;
}
interface State{

}

export class ContractListItem extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
        onDelete = () => {
            if(this.props.onDelete){
                this.props.onDelete(this.props.contract);
            }

        }
        onEdit = () => {
            if (this.props.onEdit) {
                this.props.onEdit(this.props.contract);
            }
        }

    render = () => {
        return <View style={{flexDirection:"row", marginBottom:5}}>
            <Text>{this.props.contract.contract_title}</Text>
            <Pressable style={{
                backgroundColor: 'pink',
                borderWidth: 1,
                padding: 3,
                marginLeft: 10
            }} onPress={this.onDelete}>
                <Text>Delete</Text></Pressable>
            <Pressable style={{
                backgroundColor: 'green',
                borderWidth: 1,
                padding: 3,
                marginLeft: 10
            }} onPress={this.onEdit}>
                <Text>Edit</Text></Pressable>


        </View>;
    }

}

import React from "react";
import {Contract} from "../models/Contract";
import {ContractListItem} from "../components/ContractListItem";
import {ScreenAddContract} from "./ScreenAddContract";
import {useLocalStorage} from "../components/useLocalStorage";

interface Props{
}
interface State{
    contract_list: Contract[],
    addContractSelected : boolean
}

export class ScreenContractList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            contract_list: [],
            addContractSelected: false
        };
    }
    //const [currentContract: Contract, setContract: Contract] = useLocalStorage("", {});

    onDeleteContract = (contract: Contract) => {
        let contracts = this.state.contract_list;
        let idx = contracts.indexOf(contract);
        contracts.splice(idx,1);
        this.setState({
            contract_list: contracts
        });
    }

    //onEditContract = () => {}

    onAddContract = () => {
        let contracts = this.state.contract_list;
        let newContract = ScreenAddContract.props.contract;
        contracts.push(newContract);
        this.setState({
            contract_list: contracts,
            addContractSelected: true
        })
    }

    render = () => {
        if(!this.state.addContractSelected) {
            return <div style={{flex: 1, marginBottom: 20}}>
                {this.state.contract_list.map((contract, i) =>
                    <ContractListItem key={`contract-${i}`}
                                      onDelete={this.onDeleteContract}
                        //onEdit={this.onEditContract}
                                      contract={contract}
                    />
                )}
                <div style={{flex: 1}}></div>
                <input style={{
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingLeft: 5
                }}
                    //value={this.state.currentContract}
                    //onChangeText={(newValue) => this.setState({
                    //>    currentContract: newValue
                    // })}
                />
                <button type="button" onClick={this.onAddContract}>Add contract</button>
            </div>;
        } else {
            return <div style={{flex: 1, marginBottom: 20}}>
                <ScreenAddContract contract={ScreenAddContract.props.contract} />
            </div>;
        }
    }
}

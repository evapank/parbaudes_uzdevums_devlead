import {Contract} from "../models/Contract";
import React from "react";
import {inspect} from "util";

interface Props{
    contract: Contract
}
interface State{
    contract_number: number,
    signing_date: Date,
    contract_sum: number,
    contract_currency: string,
    contract_title: string,
    contractor_other_party: string,
    contract_ending_date: Date,
    error_message: string
}

export class ScreenAddContract extends React.Component<Props, State> {
    static props: Readonly<Props>;
    constructor(props: Props) {
        super(props);
        this.state = {
            contract_number: 0,
            signing_date: new Date(),
            contract_sum: 0,
            contract_currency: "",
            contract_title: "",
            contractor_other_party: "",
            contract_ending_date: new Date(),
            error_message: ""
        };
    }

    AddContract = () => {
        let newContract: Contract = {
            contract_number: this.state.contract_number,
            signing_date: this.state.signing_date,
            contract_sum: this.state.contract_sum,
            contract_currency: this.state.contract_currency,
            contract_title: this.state.contract_title,
            contractor_other_party: this.state.contractor_other_party,
            contract_ending_date: this.state.contract_ending_date
        };
    }

    render = () => {
        let error_message = this.state.error_message;
        return (
            <div
                style={{
                    flex: 1,
                    padding: 20,
                }}>
                <p>{error_message}</p>
                <input
                    placeholder={'Contract number'}
                    pattern="[0-9]*"
                    value={this.state.contract_number}
                    onChange={text => this.setState({contract_number: Number(text.target.value)})}
                />
                <input
                    type="date"
                    placeholder={'Signing date'}
                    value={this.state.signing_date.toString()}
                    //OnChange={text => this.setState({signing_date: new Date(text.target.value)})}
                />
                <input
                    placeholder={'Contract sum'}
                    pattern="[0-9]*"
                    value={this.state.contract_sum}
                    onChange={text => this.setState({contract_sum: Number(text.target.value)})}
                />
                <input
                    placeholder={'Contract currency'}
                    pattern="[A-Z]{3}"
                    value={this.state.contract_currency}
                    onChange={text => this.setState({contract_currency: text.target.value})}
                />
                <input
                    placeholder={'Contract title'}
                    value={this.state.contract_title}
                    onChange={text => this.setState({contract_title: text.target.value})}
                />
                <input
                    placeholder={"Other party's name"}
                    value={this.state.contractor_other_party}
                    onChange={text => this.setState({contractor_other_party: text.target.value})}
                />
                <input
                    type="date"
                    placeholder={'Contract ending date'}
                    value={this.state.contract_ending_date.toString()}
                    //OnChange={text => this.setState({signing_date: new Date(text.target.value)})}
                />
                <button type="button" title={'Register'} onClick={this.AddContract}/>
            </div>
        );
    }
}

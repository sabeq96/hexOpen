import React, { Component } from 'react';

class DataTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: this.props.boxOpened,
            rpSpent: 0,
            plnSpent: 0,
            skinsUnlocked: null //Calculate Me
        }
    }

    render() {
        const {items, rpSpent, plnSpent ,skinsUnlocked} = this.state
        return (
            <div className="dataTable">
                <h2>Statistics: </h2>
                <div className="singleStat"><b>Box open: </b>{this.props.boxOpened}</div>
                <div className="singleStat"><b>Rp spent: </b>{this.props.boxOpened*490}RP</div>
                <div className="singleStat"><b>PLN spent: </b>{this.props.boxOpened*14}PLN</div>
                <div className="singleStat"><b>Skins unlocked: </b>40/820</div>
            </div>
        );
    }
    }

export default DataTable;

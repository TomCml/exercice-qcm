import QCM from "../interfaces/QCMInterface"
import DatabaseAdapter from "../interfaces/DataBaseAdapter"

class QCMModel {

    private databaseToolbox: DatabaseAdapter;

    constructor(adapterInstance: DatabaseAdapter){
        this.databaseToolbox = adapterInstance;
    }

    async fetchQuestionById(id: number): Promise<QCM> {
        return this.databaseToolbox.
    }
}
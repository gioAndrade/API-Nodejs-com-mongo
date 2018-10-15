'use strict';

module.exports = app => {

    let User = require('../models/User');

    this.post = async (req, res) => {
        let data = req.body
        console.log(data);
        try {
            const user = await User.create(data);
            return res.status(200).send({ user });
        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: 'Resgistrations failed' })
        }
    }

    this.get = async (req, res) => {
        try {
            await User.find((err, data) => {
                if (err) {
                    return res.status(500).send({ error: err })
                }
                res.status(200).send(data)
            });
        } catch (err) {
            res.status(500).send({
                error: 'Error loading user'
            });
        }
    }

    this.search = async (req, res) => {

        try{
            await User.findById(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });  
        }catch(err) {
            return res.status(400).send({error: 'Error loading user'})
        }

    }

    this.put = async (req, res) => {

        try {

            let user = await User.findByIdAndUpdate(req.params.id, req.body); 
            
            res.status(200).send(user);
            
        } catch(err) {
            return res.status(400).send({error: 'Error updating user'})
        }

    }

    this.delete = async (req, res) => {

        try{
            await User.findByIdAndRemove(req.params.id, (err, data) => {
                if(err){
                    return res.status(500).send({error: err})
                }
                res.status(200).send(data)
            });   
        }catch(err) {
            return res.status(400).send({error: 'Error deleting user'})
        }
        
    }

    return this;

}
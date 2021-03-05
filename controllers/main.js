import express from 'express';


export default class MainController {

    static home = (req, res) => {
        res.render('index', {
            pTitle: 'Home Page',
            wTitle: 'netec'
        });
    }
 }

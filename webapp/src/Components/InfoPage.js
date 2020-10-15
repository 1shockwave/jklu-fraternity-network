import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import './InfoPage.css';
import InfoAccordion from "../BaseComponents/InfoAccordion";
import Pic from '../media/hacktoberfest.png';
import Git from '../media/git.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginLeft:'10%',
        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        
    },
}));
const openSourceInfo = [
    {
        isimage:false,
        key: 0,
        controls: 'zero',
        id: 'zero',
        heading: 'Hello, Open Source Enthusiast',
        content: [<p> The year 2020 went really fast, just a blink of eye and here we are, in the month of October. The auspicious month for OpenSource enthusiasts around the world and the time for one of the biggest open source celebrations: <a class="text-apart" target="_blank" rel="noopener noreferrer"  href='https://hacktoberfest.digitalocean.com/'> Hacktoberfest 2020</a> .</p>,
                 <p> This year has really driven us apart by barring us into our homes. But its time to connect together (of course virtually).</p>,
                 <p>This time we present to you a webapp dedicated to JKLU students and Open source.Are you the most popular student/faculty/staff member at JKLU? If yes, here is your chance to prove it.</p>]
            
    }, 
    {
        isimage:false,
        key: 2,
        controls: 'two',
        id: 'two',
        heading: 'Open source: Introduction',
        content: [<p> Open source projects are a great way of developing quality products by working together with other developers. You create code that benefits the community.</p>,
                  <p>Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine. Open source gives you a feel that how things work in production.</p>]

    },
    {
        isimage:false,
        key: 3,
        img:'Git',
        controls: 'three',
        id: 'three',
        heading: 'GitHub & Git',
        content: [<p>GitHub is an open-source version-control and collaboration platform for software developers.</p>,
                  <p>Git is used to store the source code for a project and track the complete history of all changes to that code. It allows developers to collaborate on a project more effectively by providing tools for managing possibly conflicting changes from multiple developers.</p>,
                  <p>Learn more at: <a class="text-apart" target="_blank" rel="noopener noreferrer" href="https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdocs.github.com%2Fen%2Ffree-pro-team%40latest%2Fgithub%2Fgetting-started-with-github%2Fgit-and-github-learning-resources">Git & Github</a></p>]

    },
    {   
        isimage:true,
        key: 4,
        img:'Pic',
        controls: 'four',
        id: 'four',
        heading: 'Hacktoberfest',
        content: [['Hacktoberfest is open to everyone in our global community.' ],[<br />],
                  ['Whether you’re a developer, student learning to code, event host, or company of any size,' ],
                  ['you can help drive growth of open source and make positive contributions to an ever-growing community.'],[<br />],
                  ['All backgrounds and skill levels are encouraged to complete the challenge.'],[<br />],
                  ['1) Hacktoberfest is a celebration open to everyone in our global community.'],[<br />],
                  ['2) Pull requests can be made in participating GitHub-hosted repositories/projects, classified with the Hacktoberfest topic.']],

    },
    {
        isimage:false,
        key: 1,
        controls: 'one',
        id: 'one',
        heading: 'Steps for Pull request',
        content: [['Steps in order to show your profile name on Graph i.e. Home page.' ],[<br />],
                  ['1) Make Pull Request (hope you have received a mail on this).'],[<br />],
                  ['2) Try to make a valuable and good contribution.'],[<br />],
                  ['3) We will review your code.'],[<br />],
                  ['4) If you pull request got merged your name will appear in the graph.'],[<br />],
                  ['5) You have done your']],
    },
    
    

];

export default function InfoPage() {
    const classes = useStyles();
    const accordions = [];
    for (const value of openSourceInfo) {
        accordions.push(InfoAccordion(value))
    }
    return (
        <div>
            <Paper elevation={6}>
                <div className="Head-part-1">
                    <h1 className='Head-part-2'>Welcome to Open Source!</h1>
                </div>
            </Paper>
            <br/>
            <br/>

            <div className={classes.root}>
                {
                    accordions
                }
            </div>

        </div>

    );


}


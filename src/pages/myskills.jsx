import './myskills.css';
import { useState, useEffect } from 'react';

export default function MySkills(){
    return(
       <div className="page">
            <div className="boxes">
                <div className="list">
                    Languages and Technologies:
                        <div className="bulleted">
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                                <li>TS</li>
                                <li>Jest</li>
                                <li>Node.js</li>
                                <li>APIs</li>
                                <li>Webpack</li>
                                <li>JSON</li>
                                <li>React</li>
                                <li>SQL</li>
                                <li>PostgreSQL</li>
                                <li>Passport.js</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                </div>
                <div className="list">
                    Concepts and Practices:
                        <div className="bulleted">
                            <ul>
                                <li>Claude Code & GitHub Copilot</li>
                                <li>AGILE Methodology</li>
                                <li>Version Control</li>
                                <li>Code Review</li>
                                <li>Responsive Design</li>
                                <li>REST APIs</li>
                                <li>Component Based Apps</li>
                                <li>Database Design</li>
                                <li>Commit Etiquette</li>
                                <li>Clean Code Principles</li>
                                <li>Authentication & Authorization</li>
                                <li>Password Hashing & Salting</li>
                                <li>Test Driven Development</li>
                                <li>Asynchronous Programming</li>
                            </ul>
                        </div>
                </div>
            </div>
       </div> 
    )
}

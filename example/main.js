import React from 'react';
import ReactDOM from 'react-dom';
import {Validator} from 'react-ids-validator';

ReactDOM.render(
    <div>
        <section className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    Mask and Validators of civil rights identity 
                </h1>
                <h2 className="subtitle">
                    The easiest way to validate and apply a mask on input element that represents civil rights identity in React
                </h2>
                </div>
            </div>
        </section>
        <div className="columns is-gap is-centered">
            <div className="column is-8">
                <form onSubmit={(event)=> alert('Success')}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">CPF</label>
                        <div className="control has-icons-left has-icons-right">
                            <Validator
                                type="cpf"
                                required={true}
                                language="pt-BR"
                                classes="input"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">CNPJ</label>
                        <div className="control has-icons-left has-icons-right">
                            <Validator
                                type="cnpj"
                                required={true}
                                language="en"
                                classes="input"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text" type="reset">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    ,
    document.getElementById('root')
)
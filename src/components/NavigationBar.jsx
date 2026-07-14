import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-extrabold fs-4 tracking-tight" to="/" style={{ letterSpacing: '-0.05em' }}>
                        <span style={{
                            background: 'linear-gradient(45deg, #0d6efd, #0dcaf0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '800'
                        }}>Lab</span>
                        <span className="text-dark" style={{ fontWeight: '800' }}>Entry</span>
                    </Link>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-2">
                            <li className="nav-item ms-lg-2">
                                <Link className="btn btn-primary px-4 py-2 rounded-pill fw-semibold shadow-sm" to="/">
                                    Add Entry
                                </Link>
                            </li>
                            <li className="nav-item ms-lg-2">
                                <Link className="btn btn-primary px-4 py-2 rounded-pill fw-semibold shadow-sm" to="/view">
                                    View Entries
                                </Link>
                            </li>
                            {/* CTA Button Style for the main action */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
interface BookACallModalProps {
	showImage?: boolean;
	buttonText:string;
	
}
export default function BookACallModal({buttonText,showImage}:BookACallModalProps) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
			variant="dark"
				className="d-flex align-items-center gap-2 px-3 py-2  rounded-pill shadow-sm gray-dark border-0 "
				onClick={handleShow}>
				<div className="position-relative">
					{ showImage&&

						<Image
						src="/murtaza.jpg"
						alt="Murtaza"
						width={32}
						height={32}
						className="rounded-circle border border-light"
						/>
					}
				</div>
				<span className="fs-6 fw-semibold text-light">
					{buttonText}
				</span>
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				centered
				dialogClassName="modal-dialog-centered modal-lg"
				contentClassName="bg-dark text-light border border-secondary rounded-4 shadow">
				<Modal.Header className="border-0 px-4 pt-4">
					<div className="d-flex align-items-center gap-3">
						<Image
							src="/murtaza.jpg"
							alt="Murtaza"
							width={40}
							height={40}
							className="rounded-circle"
						/>
						<Modal.Title className="fs-5 fw-bold mb-0">
							Book a Discovery Call
						</Modal.Title>
					</div>
					<Button
						variant=""
						className="btn-close btn-close-white ms-auto"
						onClick={handleClose}></Button>
				</Modal.Header>

				<Modal.Body className="p-0" style={{ height: "80vh" }}>
					{show && (
						<iframe
							src="https://cal.com/murtaza-akbar/discovery"
							className="w-100 h-100 border-0 rounded-bottom"
							allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
							loading="lazy"
							title="Booking Calendar"
						/>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}

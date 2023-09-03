import { Form } from "react-bootstrap"

function Feedback() {
  return (
    <Form>
      <div
        className="container bg-white p-5 my-5 border"
        style={{ borderRadius: '30px', userSelect: 'none', fontSize: '16px' }}>

        <h1 className="fw-bold mb-5">Feedback</h1>

        <div className="d-flex flex-column gap-4 mb-5">
          <h5>Please select Feedback Type</h5>

          <Form.Check
            type="radio"
            label="Report Bug"
            name="radioGroup"
            className="feedback-radio"
          />

          <Form.Check
            type="radio"
            label="Suggest Improvement"
            name="radioGroup"
            className="feedback-radio"
          />

          <Form.Check
            type="radio"
            label="Other Feedback"
            name="radioGroup"
            className="feedback-radio"
          />

        </div>

        <div className="d-flex flex-column gap-4">
          <h5>Please enter your eail & phone number</h5>

          <div>
            <input
              type="text"
              placeholder="Email (Optional)"
              className="p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px' }} />
          </div>

          <div>
            <input
              type="text"
              placeholder="Mobile No."
              className="p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px' }} />
          </div>

          <div>
            <textarea
              placeholder="Write your feedback"
              className="p-3 col-12 border"
              style={{ borderRadius: '10px', resize: 'none' }} />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-info text-white fw-semibold p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px', fontSize: '16px' }} />
          </div>

        </div>

      </div>
    </Form>
  )
}

export default Feedback
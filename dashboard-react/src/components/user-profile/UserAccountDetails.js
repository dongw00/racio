import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">성</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="성"
                    value="박"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">이름</label>
                  <FormInput
                    id="feLastName"
                    placeholder="이름"
                    value="진우"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">이메일</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="이메일 주소"
                    value="raico123@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">비밀번호</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="비밀번호"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">시/도</label>
                  <FormInput
                    id="feCity"
                    placeholder="시/도"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">구/군/시</label>
                  <FormSelect id="feInputState">
                    <option>선택...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">우편번호</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="우편번호"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">상세주소</label>
                <FormInput
                  id="feAddress"
                  placeholder="상세주소"
                  value=""
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">자기 소개</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">변경</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "프로필 상세정보"
};

export default UserAccountDetails;

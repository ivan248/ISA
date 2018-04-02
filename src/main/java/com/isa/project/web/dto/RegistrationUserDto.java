package com.isa.project.web.dto;

public class RegistrationUserDto {

	private String email;
	private String password;
	private String passwordRepeat;
	private String firstName;
	private String lastName;
	private String city;
	private int phoneNumber;
	
	public RegistrationUserDto() {
		
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPasswordRepeat() {
		return passwordRepeat;
	}

	public void setPasswordRepeat(String passwordRepeat) {
		this.passwordRepeat = passwordRepeat;
	}

	@Override
	public String toString() {
		return "RegistrationUserDto [email=" + email + ", password=" + password + ", passwordRepeat=" + passwordRepeat
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", city=" + city + ", phoneNumber="
				+ phoneNumber + "]";
	}
	
	
	
	
	
}

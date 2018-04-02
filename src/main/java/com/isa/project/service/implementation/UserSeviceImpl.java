package com.isa.project.service.implementation;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.isa.project.bean.User;
import com.isa.project.repository.UserRepository;
import com.isa.project.service.UserService;
import com.isa.project.web.Converter;
import com.isa.project.web.dto.RegistrationUserDto;

@Service
public class UserSeviceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmailService emailService;

	@Override
	public boolean registerUser(RegistrationUserDto userDto, HttpServletRequest request) {

		User u = Converter.RegistrationDtoToUser(userDto);

		if (u == null)
			return false;

		u.setConfirmationToken(UUID.randomUUID().toString());

		userRepository.save(u);

		String appUrl = request.getScheme() + "://" + request.getServerName();

		SimpleMailMessage registrationEmail = new SimpleMailMessage();
		registrationEmail.setTo(u.getUsername());
		registrationEmail.setSubject("Registration Confirmation");
		registrationEmail.setText("To confirm your e-mail address, please click the link below:\n" + appUrl
				+ ":8080/api/login/confirm?token=" + u.getConfirmationToken());
		registrationEmail.setFrom("noreply@domain.com");

		emailService.sendEmail(registrationEmail);

		// SLANJE KONFIRMACIONOG MAILA

		// userRepository.save(u);

		System.out.println("Pokupljeni ovi podaci: " + u);
		System.out.println("A confirmation e-mail has been sent to " + u.getUsername());
		return true;

	}

	@Override
	public boolean confirmAccountRegistrationToken(String token) {
		User user = userRepository.findByConfirmationToken(token);
		System.out.println("Pogodio confirm!");

		if (user == null) { // No token found in DB
			System.out.println("Nije pronadjen token!");
			return false;
		}

		// Token found
		System.out.println("Pronasao usera sa datim tokenom!");
		user.setEnabled(true);
		userRepository.save(user);

		return true;

	}
}

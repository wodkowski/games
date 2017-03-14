package pl.kurs.game.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

	// @Override
	// public void configureMessageBroker(MessageBrokerRegistry config) {
	// config.enableSimpleBroker("/topic");
	// config.setApplicationDestinationPrefixes("/app");
	// }

	// info pod jakim adresem jest dostepny endpoint (usługa dostepna pod pewnym
	// adresem (usluga jest polaczenie wepsocketowe w tym wypadku))
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/XO-websocket").withSockJS();
	}

}
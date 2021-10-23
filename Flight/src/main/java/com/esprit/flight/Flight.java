package com.esprit.flight;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Flight implements Serializable{
	private static final long serialVersionUID = 1L;

	

	public Flight(String flightNumber, String flightFrom, String flightTo, String airlineCompany, String companyImgUrl,
			String flightDuration, String flightDate, int placesLeft, float price) {
		super();
		this.flightNumber = flightNumber;
		this.flightFrom = flightFrom;
		this.flightTo = flightTo;
		this.airlineCompany = airlineCompany;
		this.companyImgUrl = companyImgUrl;
		this.flightDuration = flightDuration;
		this.flightDate = flightDate;
		this.placesLeft = placesLeft;
		this.price = price;
	}
	
	public Flight() {
		super();
	}
	
	@Id
	@GeneratedValue
	private int id;
	private String flightNumber,flightFrom ,flightTo,airlineCompany,companyImgUrl, flightDuration,flightDate;
	private int placesLeft;
	private float price;
	public String getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getFlightFrom() {
		return flightFrom;
	}
	public void setFlightFrom(String flightFrom) {
		this.flightFrom = flightFrom;
	}
	public String getFlightTo() {
		return flightTo;
	}
	public void setFlightTo(String flightTo) {
		this.flightTo = flightTo;
	}
	public String getAirlineCompany() {
		return airlineCompany;
	}
	public void setAirlineCompany(String airlineCompany) {
		this.airlineCompany = airlineCompany;
	}
	public String getCompanyImgUrl() {
		return companyImgUrl;
	}
	public void setCompanyImgUrl(String companyImgUrl) {
		this.companyImgUrl = companyImgUrl;
	}
	public String getFlightDuration() {
		return flightDuration;
	}
	public void setFlightDuration(String flightDuration) {
		this.flightDuration = flightDuration;
	}
	public String getFlightDate() {
		return flightDate;
	}
	public void setFlightDate(String flightDate) {
		this.flightDate = flightDate;
	}
	public int getPlacesLeft() {
		return placesLeft;
	}
	public void setPlacesLeft(int placesLeft) {
		this.placesLeft = placesLeft;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((airlineCompany == null) ? 0 : airlineCompany.hashCode());
		result = prime * result + ((companyImgUrl == null) ? 0 : companyImgUrl.hashCode());
		result = prime * result + ((flightDate == null) ? 0 : flightDate.hashCode());
		result = prime * result + ((flightDuration == null) ? 0 : flightDuration.hashCode());
		result = prime * result + ((flightFrom == null) ? 0 : flightFrom.hashCode());
		result = prime * result + ((flightNumber == null) ? 0 : flightNumber.hashCode());
		result = prime * result + ((flightTo == null) ? 0 : flightTo.hashCode());
		result = prime * result + id;
		result = prime * result + placesLeft;
		result = prime * result + Float.floatToIntBits(price);
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Flight other = (Flight) obj;
		if (airlineCompany == null) {
			if (other.airlineCompany != null)
				return false;
		} else if (!airlineCompany.equals(other.airlineCompany))
			return false;
		if (companyImgUrl == null) {
			if (other.companyImgUrl != null)
				return false;
		} else if (!companyImgUrl.equals(other.companyImgUrl))
			return false;
		if (flightDate == null) {
			if (other.flightDate != null)
				return false;
		} else if (!flightDate.equals(other.flightDate))
			return false;
		if (flightDuration == null) {
			if (other.flightDuration != null)
				return false;
		} else if (!flightDuration.equals(other.flightDuration))
			return false;
		if (flightFrom == null) {
			if (other.flightFrom != null)
				return false;
		} else if (!flightFrom.equals(other.flightFrom))
			return false;
		if (flightNumber == null) {
			if (other.flightNumber != null)
				return false;
		} else if (!flightNumber.equals(other.flightNumber))
			return false;
		if (flightTo == null) {
			if (other.flightTo != null)
				return false;
		} else if (!flightTo.equals(other.flightTo))
			return false;
		if (id != other.id)
			return false;
		if (placesLeft != other.placesLeft)
			return false;
		if (Float.floatToIntBits(price) != Float.floatToIntBits(other.price))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Flight [id=" + id + ", flightNumber=" + flightNumber + ", flightFrom=" + flightFrom + ", flightTo="
				+ flightTo + ", airlineCompany=" + airlineCompany + ", companyImgUrl=" + companyImgUrl
				+ ", flightDuration=" + flightDuration + ", flightDate=" + flightDate + ", placesLeft=" + placesLeft
				+ ", price=" + price + "]";
	}
	
	
	

}

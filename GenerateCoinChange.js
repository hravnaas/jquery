function GetChange(cents)
{
	var rem = cents;
	var coinTypes = [];
	var numCoins = 0;

	coinTypes.push({name: "dollar", value: 100});
	coinTypes.push({name: "half-dollar", value: 50});
	coinTypes.push({name: "quarter", value: 25});
	coinTypes.push({name: "dime", value: 10});
	coinTypes.push({name: "nickel", value: 5});
	coinTypes.push({name: "penny", value: 1});
	

	for(var i = 0; i < coinTypes.length; i++)
	{
		if(rem > 0)
		{
			numCoins = Math.floor(rem / coinTypes[i].value);
			if(numCoins >= 0)
			{
				console.log(coinTypes[i].name + ": " + numCoins);
				rem = rem - (numCoins * coinTypes[i].value);
			}
		}
	}
}

GetChange(110);
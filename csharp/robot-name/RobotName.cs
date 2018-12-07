using System;

public class Robot
{
  public string Name
  {
    get
    {
      Random rand = new Random();
      string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return alphabet[rand.Next(26)] + alphabet[rand.Next(26)] + rand.Next(10).ToString() + rand.Next(10).ToString() + rand.Next(10).ToString();

    }
  }

  public void Reset()
  {
    throw new NotImplementedException("You need to implement this function.");
  }
}
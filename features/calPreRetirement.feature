Feature: The Securian Pre-retirement Calculator Website to calculate Pre-retirement amount

  Scenario Outline: As a user, I should be able to calucalate Pre-retirement amount

    Given I am on the login page
    When I am able to enter current age <currentAge>
    When I am able to enter age to plan to retire <retirementAge>
    When I am able to enter current annual income <annualIncome>
    When I am able to enter spouse annual income <spouseIncome>
    When I am able to enter current retirement saving balance <currentRetirementSaving>
    When I am able to enter current saving each year for retirement <currentRetirementContribution>
    When I am able to enter rate of increase in savings each year <annualContributionIncrease>
    When I am able to enter social security overirede amount <overiresocialSecurityAmt>
    When I am able to enter other income <addIncome>
    When I am able to enter retirement duration <retireDuration>
    When I am able to enter retirement income <retireIncome>
    When I am able to enter  inflation rate <inflationRate>
    When I am able to enter PreRetiremetIncome <preRetiremetIncome>
    When I am able to enter PostRetiremetIncome <postRetiremetIncome>
    Then I should validate the message <message>

    Examples:
      | currentAge | retirementAge | annualIncome | spouseIncome | currentRetirementSaving | currentRetirementContribution  | annualContributionIncrease | overiresocialSecurityAmt | addIncome| retireDuration |retireIncome |preRetiremetIncome| postRetiremetIncome |inflationRate | message|
      | 40         | 68            | 100000       | 75000        | 500000                  | 10                             | 2                          | 4000                     | 4000     |20             |75           |8                 |5                     | 2            | Results |
     